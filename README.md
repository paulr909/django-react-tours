[![Python Version](https://img.shields.io/badge/python-3.6-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-2.2.1-brightgreen.svg)](https://djangoproject.com)
[![React Version](https://img.shields.io/badge/react-16.9.0-brightgreen.svg)](https://reactjs.org/)

# Django and React Tours app.

Run your app in a Virtual Environment: http://python-guide-ru.readthedocs.io/en/latest/dev/virtualenvs.html

Install the requirements:

```bash
pip install -r requirements.txt
```

Run the development server:

```bash
python manage.py runserver
```

Run Coverage:

```bash
coverage run --branch manage.py test
```

API available at **http://127.0.0.1:8000/api/v1/bookings/**

# React Frontend

Install React:

```bash
yarn install
```

Run development build:

```bash
yarn start
```

Run production build:

```bash
yarn run build
```

Serve production build:

```bash
serve -s build
```

Run e2e tests with Cypress:
```bash
./node_modules/.bin/cypress open
```