document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('createReportForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const reportName = document.getElementById('reportName').value;
        const dateRange = document.getElementById('dateRange').value;
        const status = document.getElementById('status').value;
        const position = document.getElementById('position').value;
        const source = document.getElementById('source').value;
        const fields = Array.from(document.querySelectorAll('#fieldsChecklist input:checked')).map(checkbox => checkbox.value);

        // For demonstration, log the collected data
        console.log('Report Name:', reportName);
        console.log('Date Range:', dateRange);
        console.log('Status:', status);
        console.log('Position:', position);
        console.log('Source:', source);
        console.log('Fields:', fields);

        // Implement report generation logic here
        alert('Report generated successfully!');
    });

    // Placeholder logic for dynamic population of positions and sources
    const positionSelect = document.getElementById('position');
    const sourceSelect = document.getElementById('source');

    // Example positions and sources
    const positions = ['Software Engineer', 'Product Manager', 'Designer'];
    const sources = ['Job Board', 'Referral', 'Social Media'];

    positions.forEach(position => {
        const option = document.createElement('option');
        option.value = position.toLowerCase().replace(/\s+/g, '');
        option.textContent = position;
        positionSelect.appendChild(option);
    });

    sources.forEach(source => {
        const option = document.createElement('option');
        option.value = source.toLowerCase().replace(/\s+/g, '');
        option.textContent = source;
        sourceSelect.appendChild(option);
    });
});
