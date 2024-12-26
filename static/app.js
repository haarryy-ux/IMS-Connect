$(document).ready(function () {
    const apiUrl = 'http://127.0.0.1:5000'; // Backend API URL

    $('#submitIdeaForm').submit(function (event) {
        event.preventDefault();

        const title = $('#title').val();
        const description = $('#description').val();

        $.ajax({
            url: `${apiUrl}/ideas`, // Ensure the endpoint matches Flask route
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                title: title,
                description: description,
                submittedBy: 1  // Hardcoded user ID for testing
            }),
            success: function (response) {
                alert('Idea submitted successfully!');
                $('#title').val('');
                $('#description').val('');
            },
            error: function (error) {
                console.error(error);
                alert('Failed to submit idea. Please check the console for details.');
            }
        });
    });
});
