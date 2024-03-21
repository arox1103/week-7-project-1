document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const taskData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        const result = await response.json();
        console.log(result);
        // Optionally, you can update the UI to display the added task
    } catch (error) {
        console.error('Error:', error);
    }
});
