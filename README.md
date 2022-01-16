[![Python Version](https://img.shields.io/badge/python-3.8-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-4.0.1-brightgreen.svg)](https://djangoproject.com)
[![React Version](https://img.shields.io/badge/react-17.0.2-brightgreen.svg)](https://reactjs.org/)

# Django and React Tours app

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

API available at [http://127.0.0.1:8000/api/v1/bookings/](http://127.0.0.1:8000/api/v1/bookings/)

# React Frontend

Install React:
```bash
npm install
```

Run development build:
```bash
npm start
```

Run production build:
```bash
npm run build
```

Serve production build:
```bash
serve -s build
```

Run e2e tests with Cypress:
```bash
./node_modules/.bin/cypress open
```