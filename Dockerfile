# Use the official Python base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory inside the container
WORKDIR /smartHome

# Copy the requirements file and install dependencies
COPY requirements.txt /
RUN pip install -r /requirements.txt

# Copy the Django project into the container
COPY ./smartHome/ /smartHome/

# Expose the port that Django runs on
EXPOSE 8000

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["ls"]
