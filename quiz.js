
let questions = [
        { question: "Which of the following storage unit is the largest?", options:["Gigabyte", "Megabyte", "Petabyte", "Terabyte"], answer: 2},
        { question: "Cathode Ray Tube is a form of?", options:['CPU', 'Keyboard', 'Mouse', 'Monitor', 'Motherboard'], answer: 3},
        { question: "Which of the following is not an output device", options:['OTG', 'Printer', 'Television', 'Monitor'], answer: 0},
        { question: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Programming Unit", "Computerized Power Unit"], answer: 0 },
{ question: "Which of the following is NOT a programming language?", options: ["Python", "JavaScript", "HTML", "Java"], answer: 2 },
{ question: "What is the name of the first computer virus?", options: ["ILOVEYOU", "Creeper", "Trojan Horse", "Melissa"], answer: 1 },
{ question: "Which company developed the Windows operating system?", options: ["Apple", "IBM", "Microsoft", "Google"], answer: 2 },
{ question: "Which of the following is an example of cloud storage?", options: ["USB drive", "Dropbox", "CD-ROM", "Hard disk"], answer: 1 },
{ question: "What does 'HTTP' stand for in a web address?", options: ["Hyper Text Transmission Protocol", "Hyper Text Transfer Protocol", "High Task Transfer Protocol", "Hyperlink Text Transmission Protocol"], answer: 1 },
{ question: "Which type of memory is volatile?", options: ["RAM", "ROM", "SSD", "HDD"], answer: 0 },
{ question: "Which company developed the Android operating system?", options: ["Google", "Apple", "Microsoft", "IBM"], answer: 0 },
{ question: "Which programming language is primarily used for iOS development?", options: ["Java", "Python", "Swift", "C++"], answer: 2 },
{ question: "Which protocol is used for sending emails?", options: ["SMTP", "FTP", "HTTP", "SNMP"], answer: 0 },
{ question: "Which of the following is not an operating system?", options: ["Linux", "Windows", "Google Chrome", "macOS"], answer: 2 },
{ question: "Which technology is used to secure communication over the internet?", options: ["Wi-Fi", "Ethernet", "Bluetooth", "SSL/TLS"], answer: 3 },
{ question: "What does 'IP' in 'IP address' stand for?", options: ["Internet Provider", "Internet Protocol", "International Program", "Internet Path"], answer: 1 },
{ question: "Which programming language is commonly used for web development?", options: ["Java", "C++", "HTML", "JavaScript"], answer: 3 },
{ question: "What does 'DNS' stand for?", options: ["Domain Name System", "Digital Network Service", "Data Network Switch", "Device Network System"], answer: 0 },
{ question: "Which is an example of a NoSQL database?", options: ["MySQL", "MongoDB", "SQL Server", "PostgreSQL"], answer: 1 },
{ question: "Which device is used to connect multiple computers in a network?", options: ["Switch", "Modem", "Router", "Firewall"], answer: 2 },
{ question: "Which programming language is primarily used for data science?", options: ["PHP", "JavaScript", "Python", "C#"], answer: 2 },
{ question: "What does 'GUI' stand for?", options: ["Global User Interface", "Graphical User Interface", "General User Interface", "Generated User Interface"], answer: 1 },
{ question: "Which of the following is a relational database management system?", options: ["Oracle", "Hadoop", "MongoDB", "Cassandra"], answer: 0 },
{ question: "What is the most commonly used markup language for creating web pages?", options: ["CSS", "HTML", "JavaScript", "Python"], answer: 1 },
{ question: "Which of the following is an example of an operating system?", options: ["Apache", "Windows", "MySQL", "HTML"], answer: 1 },
{ question: "Which company is known for creating the 'iPhone'?", options: ["Google", "Microsoft", "Apple", "Samsung"], answer: 2 },
{ question: "What is the maximum number of bits in an IPv4 address?", options: ["16", "32", "64", "128"], answer: 1 },
{ question: "Which of the following is NOT a database management system?", options: ["MySQL", "Oracle", "MongoDB", "Visual Studio"], answer: 3 },
{ question: "Which of these is used to style web pages?", options: ["JavaScript", "HTML", "CSS", "Python"], answer: 2 },
{ question: "In which year was the first version of the Java programming language released?", options: ["1991", "1995", "1998", "2000"], answer: 1 },
{ question: "What does 'SSD' stand for?", options: ["Solid State Drive", "Super Secure Data", "Single System Disk", "Solid Storage Disk"], answer: 0 },
{ question: "Which language is used to query databases?", options: ["HTML", "CSS", "SQL", "Python"], answer: 2 },
{ question: "Which of these is a type of cyberattack where a server is flooded with excessive requests?", options: ["Phishing", "Man-in-the-middle", "DoS", "Ransomware"], answer: 2 },
{ question: "What is the name of the latest HTML standard?", options: ["HTML3", "HTML4", "HTML5", "HTML6"], answer: 2 },
{ question: "Which tool is used for version control in software development?", options: ["Docker", "Git", "Jenkins", "Kubernetes"], answer: 1 },
{ question: "Which company developed the search engine 'Google'?", options: ["Microsoft", "Apple", "Google", "IBM"], answer: 2 },
{ question: "Which of the following is an example of an interpreted language?", options: ["C++", "Java", "Python", "Assembly"], answer: 2 },
{ question: "What does the acronym 'AI' stand for?", options: ["Artificial Interface", "Algorithmic Intelligence", "Artificial Intelligence", "Automated Intelligence"], answer: 2 },
{ question: "Which programming language was created by Guido van Rossum?", options: ["Java", "Python", "Ruby", "PHP"], answer: 1 },
{ question: "Which of the following is a front-end JavaScript framework?", options: ["Node.js", "React", "Django", "Flask"], answer: 1 },
{ question: "What does 'IoT' stand for?", options: ["Internet of Technology", "Input-output Technology", "Internet of Things", "Interface of Technology"], answer: 2 },
{ question: "Which of the following is an example of cloud computing?", options: ["Amazon S3", "External Hard Drive", "Local Disk", "USB Flash Drive"], answer: 0 },
{ question: "What is the main function of a firewall in network security?", options: ["To store data", "To monitor CPU usage", "To block unauthorized access", "To increase internet speed"], answer: 2 },
{ question: "Which technology is used to create virtual machines?", options: ["Blockchain", "Virtualization", "5G", "Cryptography"], answer: 1 },
{ question: "Which of the following is an open-source operating system?", options: ["macOS", "Windows", "Linux", "iOS"], answer: 2 },
{ question: "Which of these technologies is commonly used for mobile payments?", options: ["Bluetooth", "NFC", "Wi-Fi", "USB"], answer: 1 },
{ question: "Which protocol is primarily used to secure web traffic?", options: ["FTP", "SSH", "SSL/TLS", "SMTP"], answer: 2 },
{ question: "What does 'API' stand for?", options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Automated Program Integration"], answer: 0 },
{ question: "What is the most commonly used markup language for creating web pages?", options: ["CSS", "HTML", "JavaScript", "Python"], answer: 1 },
{ question: "Which of the following is an example of an operating system?", options: ["Apache", "Windows", "MySQL", "HTML"], answer: 1 },
{ question: "Which company is known for creating the 'iPhone'?", options: ["Google", "Microsoft", "Apple", "Samsung"], answer: 2 },
{ question: "What is the maximum number of bits in an IPv4 address?", options: ["16", "32", "64", "128"], answer: 1 },
{ question: "Which of the following is NOT a database management system?", options: ["MySQL", "Oracle", "MongoDB", "Visual Studio"], answer: 3 },
{ question: "Which of these is used to style web pages?", options: ["JavaScript", "HTML", "CSS", "Python"], answer: 2 },
{ question: "In which year was the first version of the Java programming language released?", options: ["1991", "1995", "1998", "2000"], answer: 1 },
{ question: "What does 'SSD' stand for?", options: ["Solid State Drive", "Super Secure Data", "Single System Disk", "Solid Storage Disk"], answer: 0 },
{ question: "Which language is used to query databases?", options: ["HTML", "CSS", "SQL", "Python"], answer: 2 },
{ question: "Which of these is a type of cyberattack where a server is flooded with excessive requests?", options: ["Phishing", "Man-in-the-middle", "DoS", "Ransomware"], answer: 2 },
{ question: "What is the name of the latest HTML standard?", options: ["HTML3", "HTML4", "HTML5", "HTML6"], answer: 2 },
{ question: "Which tool is used for version control in software development?", options: ["Docker", "Git", "Jenkins", "Kubernetes"], answer: 1 },
{ question: "Which company developed the search engine 'Google'?", options: ["Microsoft", "Apple", "Google", "IBM"], answer: 2 },
{ question: "Which of the following is an example of an interpreted language?", options: ["C++", "Java", "Python", "Assembly"], answer: 2 },
{ question: "What does the acronym 'AI' stand for?", options: ["Artificial Interface", "Algorithmic Intelligence", "Artificial Intelligence", "Automated Intelligence"], answer: 2 },
{ question: "Which programming language was created by Guido van Rossum?", options: ["Java", "Python", "Ruby", "PHP"], answer: 1 },
{ question: "Which of the following is a front-end JavaScript framework?", options: ["Node.js", "React", "Django", "Flask"], answer: 1 },
{ question: "What does 'IoT' stand for?", options: ["Internet of Technology", "Input-output Technology", "Internet of Things", "Interface of Technology"], answer: 2 },
{ question: "Which of the following is an example of cloud computing?", options: ["Amazon S3", "External Hard Drive", "Local Disk", "USB Flash Drive"], answer: 0 },
{ question: "What is the main function of a firewall in network security?", options: ["To store data", "To monitor CPU usage", "To block unauthorized access", "To increase internet speed"], answer: 2 },
{ question: "Which technology is used to create virtual machines?", options: ["Blockchain", "Virtualization", "5G", "Cryptography"], answer: 1 },
{ question: "Which of the following is an open-source operating system?", options: ["macOS", "Windows", "Linux", "iOS"], answer: 2 },
{ question: "Which of these technologies is commonly used for mobile payments?", options: ["Bluetooth", "NFC", "Wi-Fi", "USB"], answer: 1 },
{ question: "Which protocol is primarily used to secure web traffic?", options: ["FTP", "SSH", "SSL/TLS", "SMTP"], answer: 2 },
{ question: "What does 'API' stand for?", options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Automated Program Integration"], answer: 0 },
{ question: "Which of the following is a widely-used cloud platform?", options: ["GitHub", "AWS", "Eclipse", "Docker"], answer: 1 },
{ question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Process", "Hyper Tool Transfer Protocol", "HyperText Transmission Process"], answer: 0 },
{ question: "Which company developed the 'Windows' operating system?", options: ["Apple", "IBM", "Microsoft", "Google"], answer: 2 },
{ question: "Which programming language is known as the 'language of the web'?", options: ["Python", "C++", "Java", "JavaScript"], answer: 3 },
{ question: "Which of these is a relational database management system?", options: ["Redis", "SQLite", "MongoDB", "Node.js"], answer: 1 },
{ question: "Which technology is commonly used to create decentralized applications (dApps)?", options: ["AI", "Blockchain", "IoT", "Cloud Computing"], answer: 1 },
{ question: "Which of these is a popular content management system (CMS)?", options: ["Angular", "WordPress", "MySQL", "React"], answer: 1 },
{ question: "What is the main purpose of an API?", options: ["To style web pages", "To connect different software applications", "To store data", "To manage databases"], answer: 1 },
{ question: "Which of the following technologies is used to store data in a key-value format?", options: ["MongoDB", "Redis", "MySQL", "PostgreSQL"], answer: 1 },
{ question: "Which programming paradigm does Java support?", options: ["Functional", "Procedural", "Object-Oriented", "Declarative"], answer: 2 },
{ question: "Which tool is commonly used for continuous integration and delivery (CI/CD)?", options: ["Kubernetes", "Jenkins", "Docker", "Apache"], answer: 1 },
{ question: "What does 'CSS' stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: 0 },
{ question: "Which command-line tool is used to manage Git repositories?", options: ["git", "bash", "cmd", "ssh"], answer: 0 },
{ question: "Which of the following is an example of a NoSQL database?", options: ["SQL Server", "Oracle", "PostgreSQL", "MongoDB"], answer: 3 },
{ question: "Which of these is a popular server-side web framework for Python?", options: ["Angular", "React", "Flask", "Vue"], answer: 2 },
{ question: "Which language is primarily used for data science and machine learning?", options: ["C++", "Java", "R", "PHP"], answer: 2 },
{ question: "Which tool is used for containerization of applications?", options: ["Kubernetes", "Docker", "VMware", "VirtualBox"], answer: 1 },
{ question: "What does 'VPN' stand for?", options: ["Virtual Public Network", "Virtual Private Network", "Verified Private Network", "Variable Private Network"], answer: 1 },
{ question: "Which of the following is a JavaScript runtime environment?", options: ["Node.js", "Django", "Laravel", "Flask"], answer: 0 },
{ question: "Which technology allows for the real-time updating of web pages without reloading?", options: ["AJAX", "PHP", "HTML", "CSS"], answer: 0 },
{ question: "What does 'DNS' stand for?", options: ["Domain Name System", "Digital Network System", "Distributed Name System", "Domain Network System"], answer: 0 },
{ question: "Which of the following is used to manage network security?", options: ["Router", "Firewall", "Switch", "Gateway"], answer: 1 },
{ question: "Which language is commonly used for writing Android applications?", options: ["Swift", "Java", "C#", "Ruby"], answer: 1 },
{ question: "What is the role of the 'kernel' in an operating system?", options: ["Manage hardware", "Manage applications", "Store data", "Connect to the internet"], answer: 0 },
{ question: "Which of these technologies is used for creating virtual networks?", options: ["SDN", "DNS", "HTML", "CSS"], answer: 0 },
{ question: "Which of the following is a lightweight text editor commonly used by developers?", options: ["MS Word", "Notepad++", "Photoshop", "Excel"], answer: 1 },
{ question: "What does 'SQL' stand for?", options: ["Standard Query Language", "Structured Query Language", "Simple Query Language", "Sorted Query Language"], answer: 1 },
{ question: "Which programming language is primarily used for Android app development?", options: ["Swift", "Java", "Python", "C#"], answer: 1 },
{ question: "What does 'SSD' stand for?", options: ["Solid State Drive", "Software System Disk", "Secure Storage Device", "Standard Storage Disk"], answer: 0 },
{ question: "Which of the following is a front-end web development language?", options: ["Java", "Python", "HTML", "C++"], answer: 2 },
{ question: "Which company created the Windows operating system?", options: ["Apple", "Google", "Microsoft", "IBM"], answer: 2 },
{ question: "What is an IP address used for?", options: ["Storing files", "Connecting a device to the internet", "Encrypting data", "Displaying websites"], answer: 1 },
{ question: "Which of the following is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: 2 },
{ question: "Which file format is commonly used for web images?", options: ["PDF", "MP4", "JPEG", "DOCX"], answer: 2 },
{ question: "Which term is used to describe unsolicited email?", options: ["Phishing", "Malware", "Spam", "Trojan"], answer: 2 },
{ question: "What does GUI stand for?", options: ["General User Interface", "Graphical User Interface", "Guided User Interaction", "Global User Integration"], answer: 1 },
{ question: "Which device stores temporary data for faster processing?", options: ["Hard Drive", "RAM", "SSD", "Motherboard"], answer: 1 },
{ question: "What is the purpose of an API?", options: ["To connect devices in a network", "To create user interfaces", "To enable communication between software applications", "To format hard drives"], answer: 2 },
{ question: "What is Git primarily used for?", options: ["Database management", "Version control", "Data encryption", "UI design"], answer: 1 },
{ question: "Which of the following is a cloud computing service?", options: ["JavaScript", "AWS", "HTTP", "Bluetooth"], answer: 1 },
{ question: "What does 'SaaS' stand for?", options: ["System as a Service", "Software as a Service", "Storage as a Service", "Security as a Service"], answer: 1 },
{ question: "Which programming language is most commonly used for AI development?", options: ["C++", "Python", "Ruby", "Swift"], answer: 1 },
{ question: "What is the main function of a router?", options: ["To block malware", "To route traffic between different networks", "To manage power usage", "To encrypt data"], answer: 1 },
{ question: "Which software tool is used for containerization?", options: ["Git", "Kubernetes", "Docker", "Ansible"], answer: 2 },
{ question: "Which company developed the Java programming language?", options: ["Google", "Microsoft", "Sun Microsystems", "Apple"], answer: 2 },
{ question: "What does CSS stand for in web development?", options: ["Cascading Style Sheets", "Central System Styles", "Coded Style Sheets", "Custom Script Syntax"], answer: 0 },
{ question: "Which of the following is a Linux distribution?", options: ["Windows", "macOS", "Ubuntu", "DOS"], answer: 2 },
{ question: "What is the purpose of two-factor authentication?", options: ["To speed up login", "To encrypt passwords", "To add an extra layer of security", "To block cookies"], answer: 2 },
{ question: "Which technology is commonly used to create mobile applications that run on both Android and iOS?", options: ["React Native", "C++", "Ruby on Rails", "Flask"], answer: 0 },
{ question: "What does 'JSON' stand for?", options: ["JavaScript Online Notation", "JavaScript Object Notation", "Java Syntax Object Notation", "JavaScript Open Notation"], answer: 1 },
{ question: "Which of the following is a cybersecurity threat?", options: ["Firewall", "Ransomware", "Ethernet", "BitTorrent"], answer: 1 },
{ question: "What is the full form of BIOS in computer systems?", options: ["Binary Input Output System", "Basic Input Output System", "Basic Information Organizing System", "Basic Internal Operating System"], answer: 1 },
{ question: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "HyperTransfer Markup Language", "HyperText Main Language", "HyperTool Markup Language"], answer: 0 },
{ question: "Which technology is used to mine cryptocurrencies like Bitcoin?", options: ["Blockchain", "Artificial Intelligence", "Virtualization", "IoT"], answer: 0 },
{ question: "What is the term for connecting multiple devices to a single network?", options: ["Synchronization", "Networking", "Pairing", "Cloud Computing"], answer: 1 },
{ question: "Which of these is an example of a wearable technology?", options: ["Smartwatch", "Desktop", "Laptop", "Router"], answer: 0 },
{ question: "Which of the following is a common file compression format?", options: ["TXT", "ZIP", "PDF", "EXE"], answer: 1 },
{ question: "Which device is used to translate data into a form that can be transmitted over a network?", options: ["Router", "Modem", "Firewall", "Ethernet"], answer: 1 },
        
    ];

let currentQuestionIndex = 0;
let selectedQuestionCount = 0;
let userAnswers = [];

document.getElementById("start-quiz").addEventListener("click", function() {
    const questionCount = parseInt(document.getElementById("question-count").value);
    if (isNaN(questionCount) || questionCount < 1 || questionCount > 15) {
        alert("Please enter a number between 1 and 15.");
    } else {
        selectedQuestionCount = questionCount;
        shuffleQuestions();
        document.getElementById("start-container").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
        showQuestion();
        
    }
});

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questionBox = document.getElementById("question-box");
    const questionData = questions[currentQuestionIndex];
    questionBox.innerHTML = `<h3>Question ${currentQuestionIndex + 1}: ${questionData.question}</h3>`;
    questionData.options.forEach((option, index) => {
        questionBox.innerHTML += `
            <div class="option">
                <input type="radio" name="option" id="option${index}" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
                <label for="option${index}">${option}</label>
            </div>
        `;
    });

    document.getElementById("prev-btn").classList.toggle("hidden", currentQuestionIndex === 0);
    document.getElementById("next-btn").classList.toggle("hidden", currentQuestionIndex === selectedQuestionCount - 1);
    document.getElementById("submit-btn").classList.toggle("hidden", currentQuestionIndex !== selectedQuestionCount - 1);
}

document.getElementById("prev-btn").addEventListener("click", function() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

document.getElementById("next-btn").addEventListener("click", function() {
    saveAnswer();
    if (currentQuestionIndex < selectedQuestionCount - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
});

document.getElementById("submit-btn").addEventListener("click", function() {
    saveAnswer();
    displayResults();
});

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    userAnswers[currentQuestionIndex] = selectedOption ? parseInt(selectedOption.value) : null;
}

function displayResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    questions.slice(0, selectedQuestionCount).forEach((question, index) => {
        const resultText = document.createElement("div");
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;

        if (userAnswer === correctAnswer) {
            resultText.textContent = `Question ${index + 1}: Correct - ${question.options[correctAnswer]}`;
            resultText.classList.add("correct");
        } else {
            resultText.textContent = `Question ${index + 1}: Incorrect - Your answer:


${question.options[userAnswer] || "None"}, Correct answer: ${question.options[correctAnswer]}`;
            resultText.classList.add("incorrect");
        }

        resultsContainer.appendChild(resultText);
    });
}

document.getElementById("retry-quiz").addEventListener("click", function() {
    userAnswers = [];
    currentQuestionIndex = 0;
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("start-container").classList.remove("hidden");
});

function displayResults() {
document.getElementById("quiz-container").classList.add("hidden");
document.getElementById("result-container").classList.remove("hidden");

const resultsContainer = document.getElementById("results");
resultsContainer.innerHTML = "";

let correctAnswersCount = 0; // Initialize correct answer counter

questions.slice(0, selectedQuestionCount).forEach((question, index) => {
    const resultText = document.createElement("div");
    const userAnswer = userAnswers[index];
    const correctAnswer = question.answer;

    if (userAnswer === correctAnswer) {
        resultText.textContent = `Question ${index + 1}: Correct - ${question.options[correctAnswer]}`;
        resultText.classList.add("correct");
        correctAnswersCount++; // Increment correct answer count
    } else {
        resultText.textContent = `Question ${index + 1}: Incorrect - Your answer: ${question.options[userAnswer] || "None"}, Correct answer: ${question.options[correctAnswer]}`;
        resultText.classList.add("incorrect");
    }

    resultsContainer.appendChild(resultText);
});

// Display the score
const scoreText = document.createElement("h3");
scoreText.textContent = `Your Score: ${correctAnswersCount}/${selectedQuestionCount}`;
resultsContainer.appendChild(scoreText);
}

