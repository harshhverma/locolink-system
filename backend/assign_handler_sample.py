# AWS Lambda - Assign Complaint Handler (Sample)

import json

def lambda_handler(event, context):
    try:
        # Parse request body
        body = json.loads(event.get("body", "{}"))

        complaint_id = body.get("complaint_id")
        staff_id = body.get("staff_id")

        # Basic validation
        if not complaint_id or not staff_id:
            return {
                "statusCode": 400,
                "body": json.dumps({"message": "Missing required fields"})
            }

        # Update complaint assignment in database
        # (Actual DynamoDB update logic hidden)

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Complaint assigned successfully"
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "message": "Internal Server Error"
            })
        }