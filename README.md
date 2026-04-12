# LocoLink – Cloud Based Smart Railway Complaint Management System

LocoLink is a cloud-based complaint management system designed to improve traditional railway complaint handling systems like RailMadad.

It enables real-time complaint processing, intelligent grouping, and priority-based resolution using AWS serverless architecture.

---

## Features

- Passenger complaint submission system
- Serverless backend using AWS Lambda & API Gateway
- Intelligent complaint grouping & priority calculation
- Real-time dashboard for railway staff
- Zone-based filtering, assignment, and resolution
- Secure API communication with key-based authentication
- Automated performance testing

---

## Architecture

![Architecture](docs/diagrams/aws-architecture-locolink.drawio.png)

- Frontend: Next.js (AWS Amplify)
- Backend: AWS Lambda (Python)
- API: AWS API Gateway (HTTP APIs)
- Database: DynamoDB
- Security: API Keys + IAM
- Alert: SNS

## Flowchart

![Flowchart](docs/diagrams/flowchart-locolink.drawio.png)

## Use Case

![Use Case](docs/diagrams/use-case-locolink.drawio.png)



---

## Screenshots

### Passenger Complaint UI
![Home Page](docs/passenger-complaint-portal/1home-page.png)

![Complaint Registration Page](docs/passenger-complaint-portal/2complaint-registration-page.png)

![Complaint Filled](docs/passenger-complaint-portal/3complaint-filled.png)

![Complaint Sent](docs/passenger-complaint-portal/4complaint-sent.png)

![Duplicate Complaint](docs/passenger-complaint-portal/5duplicate-complaint.png)

![Different Zone](docs/passenger-complaint-portal/6-different-zone.png)

![Grouping Complaint](docs/passenger-complaint-portal/6-grouping-complaint.png)


### Dashboard
![Zero Complaint](docs/railway-control-room-dashboard/1-zero-complaint.png)

![Complaint Arrived](docs/railway-control-room-dashboard/2-one-complaint-arrived.png)

![Grouping Same Complaint](docs/railway-control-room-dashboard/3-grouping-same-complaint.png)

![Complaint Assgined](docs/railway-control-room-dashboard/4-complaint-assgined.png)

![Complaint Resolved](docs/railway-control-room-dashboard/5-resolved-complaint.png)

![Different Zone](docs/railway-control-room-dashboard/6-zone-different.png)

### Alert (AWS SNS Alert)

![SNS Alert](docs/SNS-Alert/1SNS-alert-recieved.png)
![Full Message](docs/SNS-Alert/2-SNS-alert-recieved.png)


### Database (DynamoDB)
![DB](docs/testing-matrics/DynamoDB-data-stored.png)

![CSV File Screenshot](docs/testing-matrics/csv-file-dynamo-db.png)

### Testing Metrics
![Running Automation Script](docs/testing-matrics/1running-automation-script.png)

![Running Automation Script](docs/testing-matrics/2running-automation-script.png)

![Running Automation Script](docs/testing-matrics/3running-automation-script.png)

![Running Automation Script](docs/testing-matrics/4running-automation-script.png)

![Running Automation Script](docs/testing-matrics/5running-automation-script.png)

![Automation Script Successfully Executed](docs/testing-matrics/after-automation-script.png)

---

## Performance

- Low latency (~200–700 ms)
- Scalable serverless architecture
- Handles concurrent requests efficiently
- Tested using automated scripts

---

## Testing

Automated testing validates:

- API performance
- Security (unauthorized access blocked)
- Complaint grouping logic
- System stability under load

---

## Security

- API key-based authentication
- Backend validation using AWS Lambda
- Secrets managed via environment variables

---

## Tech Stack

- AWS (Lambda, API Gateway, DynamoDB, Amplify)
- Next.js (Frontend)
- Python (Backend)
- Serverless Architecture

---

## Use Case

Designed to enhance railway complaint systems by reducing redundancy, improving response time, and enabling better monitoring through dashboards.

---

## Author

Harsh Verma
Linkedin ID: https://www.linkedin.com/in/harsh-verma19/
