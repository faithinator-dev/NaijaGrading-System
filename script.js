function calculateSecondary() {
    const score = parseFloat(document.getElementById('secInput').value);
    const resultDiv = document.getElementById('secResult');
    
    if (isNaN(score) || score < 0 || score > 100) {
        resultDiv.innerHTML = '<span class="result-text text-danger">Please enter a valid score (0-100)</span>';
        return;
    }
    
    let grade = '';
    if (score >= 75) grade = 'A1 - Excellent';
    else if (score >= 70) grade = 'B2 - Very Good';
    else if (score >= 65) grade = 'B3 - Good';
    else if (score >= 60) grade = 'C4 - Credit';
    else if (score >= 55) grade = 'C5 - Credit';
    else if (score >= 50) grade = 'C6 - Credit';
    else if (score >= 45) grade = 'D7 - Pass';
    else if (score >= 40) grade = 'E8 - Pass';
    else grade = 'F9 - Fail';
    
    resultDiv.innerHTML = `<span class="result-text">Grade: ${grade}</span>`;
}

function calculateUni() {
    const cgpa = parseFloat(document.getElementById('uniInput').value);
    const resultDiv = document.getElementById('uniResult');
    
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 5) {
        resultDiv.innerHTML = '<span class="result-text text-danger">Please enter a valid CGPA (0.0-5.0)</span>';
        return;
    }
    
    let classification = '';
    if (cgpa >= 4.50) classification = 'First Class Honours';
    else if (cgpa >= 3.50) classification = 'Second Class Honours (Upper Division)';
    else if (cgpa >= 2.50) classification = 'Second Class Honours (Lower Division)';
    else if (cgpa >= 1.50) classification = 'Third Class Honours';
    else if (cgpa >= 1.00) classification = 'Pass';
    else classification = 'Fail';
    
    resultDiv.innerHTML = `<span class="result-text">${classification}</span>`;
}

function calculatePoly() {
    const cgpa = parseFloat(document.getElementById('polyInput').value);
    const resultDiv = document.getElementById('polyResult');
    
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 5) {
        resultDiv.innerHTML = '<span class="result-text text-danger">Please enter a valid CGPA (0.0-5.0)</span>';
        return;
    }
    
    let classification = '';
    if (cgpa >= 4.50) classification = 'Distinction';
    else if (cgpa >= 3.50) classification = 'Upper Credit';
    else if (cgpa >= 2.50) classification = 'Lower Credit';
    else if (cgpa >= 1.50) classification = 'Pass';
    else classification = 'Fail';
    
    resultDiv.innerHTML = `<span class="result-text">${classification}</span>`;
}
