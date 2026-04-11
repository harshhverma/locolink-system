# AWS Lambda - Resolve Complaint Handler (Sample)

import json

def lambda_handler(event, context):
    try:
        # Parse request body
        body = json.loads(event.get("body", "{}"))

        complaint_id = body.get("complaint_id")

        # Validate input
        if not complaint_id:
            return {
                "statusCode": 400,
                "body": json.dumps({"message": "Complaint ID is required"})
            }

        # Update complaint status in database
        # (Actual resolution logic hidden)

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Complaint resolved successfully"
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "message": "Internal Server Error"
            })
        }