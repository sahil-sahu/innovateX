import multiprocessing
import subprocess


def run_script1(script_name):
    subprocess.run(["python", script_name])


def run_script2():
    subprocess.run(["gunicorn", "smartHome.wsgi:application", "--bind", "0.0.0.0:8000"])


if __name__ == "__main__":
    script1_process = multiprocessing.Process(
        target=run_script1, args=("mqtt_utils.py",))
    script2_process = multiprocessing.Process(target=run_script2)

    script1_process.start()
    script2_process.start()

    script1_process.join()
    script2_process.join()
