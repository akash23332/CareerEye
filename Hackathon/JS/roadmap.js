const API_KEY = "AIzaSyAFGFEOyQeKvUsTYZHjwNFw2DMt9xrjo0w";

document.getElementById("careerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const careerGoal = document.getElementById("career_goal").value;
    const skills = document.getElementById("skills").value;

    // Gemini API Prompt
    const prompt = `I am interested in becoming a ${careerGoal}. I have the following skills: ${skills}. 
    Generate a career roadmap that includes missing skills, recommended courses, projects, and certifications.`;

    try {
        // Call Gemini API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        const roadmap = data.candidates[0].content.parts[0].text; 
        // Display the roadmap
        document.getElementById("result").innerHTML = `<h3>Career Roadmap for ${careerGoal}</h3><p>${roadmap.replace(/\n/g, "<br>")}</p>`;
    } catch (error) {
        console.error("Error fetching roadmap:", error);
        document.getElementById("result").innerHTML = "<p style='color:red;'>Failed to generate roadmap. Try again.</p>";
    }
});
