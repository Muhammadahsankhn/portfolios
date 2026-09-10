<?php
// contact.php

header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON data"]);
    exit;
}

// Extract fields
$name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$contactNumber = isset($data['contactNumber']) ? htmlspecialchars(trim($data['contactNumber'])) : '';
$category = isset($data['category']) ? htmlspecialchars(trim($data['category'])) : '';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';

if (empty($name) || empty($email) || empty($contactNumber) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Required fields are missing."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email format."]);
    exit;
}

// Setup Email
$to = "info@digicarehouse.com, marketing@digicarehouse.com, salman@digicarehouse.com, talha@digicarehouse.com";
$subject = "Marketing website Inquiry Form";

$htmlContent = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #0d1e3d;'>New Contact Form Submission</h2>
    <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
    <tr style='background-color: #f8f9fa;'>
        <th style='padding: 12px; border: 1px solid #ddd; text-align: left; width: 30%;'>Field</th>
        <th style='padding: 12px; border: 1px solid #ddd; text-align: left;'>Value</th>
    </tr>
    <tr>
        <td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Name</td>
        <td style='padding: 12px; border: 1px solid #ddd;'>$name</td>
    </tr>
    <tr>
        <td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Email</td>
        <td style='padding: 12px; border: 1px solid #ddd;'>$email</td>
    </tr>
    <tr>
        <td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Contact Number</td>
        <td style='padding: 12px; border: 1px solid #ddd;'>$contactNumber</td>
    </tr>
    <tr>
        <td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Category</td>
        <td style='padding: 12px; border: 1px solid #ddd;'>$category</td>
    </tr>
    <tr>
        <td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Message</td>
        <td style='padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;'>$message</td>
    </tr>
    </table>
    <p style='margin-top: 30px; font-size: 12px; color: #666;'>
    This email was sent from the DigiCareHouse website contact form.
    </p>
</div>
";

// Headers for HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Send email
if (mail($to, $subject, $htmlContent, $headers)) {
    echo json_encode(["message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email. Check cPanel mail settings."]);
}
?>
