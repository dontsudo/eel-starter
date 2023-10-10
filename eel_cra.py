"""Main Python application file for the EEL-CRA demo."""

import os
import platform
import random


import eel


@eel.expose  # Expose function to JavaScript
def say_hello_py(x):
    """Print message from JavaScript on app initialization, then call a JS function."""
    print("Hello from %s" % x)

    return "ok" if x else "error"


@eel.expose
def calculate_stability(values):
    return {"stability": 0.5, "error": None}


@eel.expose
def expand_user(folder):
    """Return the full path to display in the UI."""
    return "{}/*".format(os.path.expanduser(folder))


@eel.expose
def pick_file(folder):
    """Return a random file from the specified folder."""
    folder = os.path.expanduser(folder)
    if os.path.isdir(folder):
        listFiles = [
            _f
            for _f in os.listdir(folder)
            if not os.path.isdir(os.path.join(folder, _f))
        ]
        if len(listFiles) == 0:
            return "No Files found in {}".format(folder)
        return random.choice(listFiles)
    else:
        return "{} is not a valid folder".format(folder)


def start_eel(develop):
    """Start Eel with either production or development configuration."""

    if develop:
        directory = "src"
        app = "chrome"
        page = {"port": 3000}
    else:
        directory = "build"
        app = "chrome"
        page = ""

    eel.init(directory, [".tsx", ".ts", ".jsx", ".js", ".html"])

    eel_kwargs = dict(
        host="localhost",
        port=8080,
        size=(1024, 820),
    )
    try:
        eel.start(page, mode=app, **eel_kwargs)
    except EnvironmentError as e:
        print(e)
        # If Chrome isn't found, fallback to Microsoft Edge on Win10 or greater
        if sys.platform in ["win32", "win64"] and int(platform.release()) >= 10:
            eel.start(page, mode="edge", **eel_kwargs)
        else:
            raise


if __name__ == "__main__":
    import sys

    # Pass any second argument to enable debugging
    start_eel(develop=len(sys.argv) == 2)
