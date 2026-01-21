const projects = [
   {
      title: "StockSprout",
      stack: "Java, PostgreSQL, React",
      imageUrl: "image/StockSprout.png",
      link: "https://github.com/manas123123/StockSprout",
      description: "StockSprout is a full stack <span class=\"highlight\">paper trading</span> web application that allows users to <span class=\"highlight\">simulate</span> buying and selling stocks with <span class=\"highlight\">virtual money,</span> track <span class=\"highlight\">real time</span>  portfolio performance, analyze trading history, and practice investment strategies using <span class=\"highlight\">live market data</span> without any financial risk.",
      hasBorder: false
   },
   {
      title: "LoS-V2X-Blockage Prediction",
      stack: "Python, PyTorch, NumPy, Pandas",
      imageUrl: "image/Drac.png",
      link: "https://github.com/manas123123/drac",
      description: "A multimodal deep learning research project for predicting line of sight blockage in 6G vehicular networks by fusing visual and wireless data using <span class=\"highlight\">CNN</span>, <span class=\"highlight\">ViT</span>, <span class=\"highlight\">Swin Transformer</span>, <span class=\"highlight\">Large Wireless Models (LWM)</span>, and <span class=\"highlight\">GRU</span> based temporal modeling.",
      hasBorder: true
   },
   {
      title: "Ray Tracer",
      stack: "Java, Object-Oriented-Programming",
      imageUrl: "image/RayTracer.png",
      link: "https://github.com/manas123123/RayTracer",
      description: "I’m creating this raytracer in <span class=\"highlight\">Java</span> using <span class=\"highlight\">object-oriented programming</span> because I love working with algorithms and seeing them come to life. It renders 3D scenes with reflections by tracing rays of light, and I will be building a simulation of a black hole very soon."
   },
   {
      title: "DocGen",
      stack: "Application",
      imageUrl: "image/DocGen.png",
      link: "https://github.com/manas123123/YU-Document-Generator",
      description: "Developed an automated document generator using <span class=\"highlight\">Python,</span> <span class=\"highlight\">Pandas,</span> and <span class=\"highlight\">Win32</span> to create personalized Word files. Widely used at my current workplace as it ensures efficient processing, dynamic data replacement, and template integrity."
   },
   {
      title: "Flight Price Predictor",
      stack: "Machine Learning",
      imageUrl: "image/FlightPricePredictor.png",
      link: "https://github.com/manas123123/Flight-Price-Predictor",
      description: "Achieved <span class=\"highlight\">81.2%</span> Accuracy. Developed a flight price prediction model using <span class=\"highlight\">Python.</span> Used <span class=\"highlight\">Pandas</span> and <span class=\"highlight\">NumPy</span> for data preprocessing and analysis. <span class=\"highlight\">Scikit-learn</span> for implementing and tuning machine learning models to achieve correct price predictions.",
      hasBorder: true
   },
   {
      title: "Bingo Game 2.0",
      stack: "Game",
      imageUrl: "image/Bingo.png",
      link: "https://github.com/manas123123/Bingo-Game-2.0",
      description: "Built a console based Bingo game in <span class=\"highlight\">Java</span> that I used to play with my friends growing up in school. The game has 3 different levels and fun mechanics. Implemented animations to improve user engagement and create a dynamic flow in the console."
   },
   {
      title: "Tic Tac Toe",
      stack: "Game",
      imageUrl: "image/TicTacToe.png",
      link: "https://manas123123.github.io/Tic-Tac-Toe/",
      description: "Developed an interactive Tic Tac Toe game with a user-friendly interface using <span class=\"highlight\">HTML</span> and <span class=\"highlight\">CSS.</span> Implemented gameplay mechanics, including win detection, and game reset functionality using <span class=\"highlight\">JavaScript.</span>",
      hasBorder: true
   },
   {
      title: "Survey Breakdown",
      stack: "Data Analytics",
      imageUrl: "image/SurveyBreakdown.png",
      link: "https://github.com/manas123123/Data-Professional-Survey-Breakdown",
      description: "A <span class=\"highlight\">Power BI</span> dashboard analyzing survey data from data professionals, covering country distribution, salary by job title, age, work-life balance, salary satisfaction, career difficulty, and favorite programming languages."
   }
];

const projectsContainer = document.getElementById('projects-container');

// Render Projects
projects.forEach(project => {
   const projectHTML = `
        <div class="project">
            <div class="project-left">
                <div class="project-head hidden-left">${project.title}<div class="stack">| ${project.stack}</div></div>
                <a class="project-img-link hidden-left" href="${project.link}">
                    <div class="project-img" style="background-image: url('${project.imageUrl}'); ${project.hasBorder ? 'border: 2px solid white;' : ''}"></div>
                </a>
            </div>
            <div class="project-right">
                <div class="desc hidden-right">Description</div>
                <div class="desc-text hidden-right">
                    ${project.description}
                </div>
                <div class="cto"><a class="cto-link hidden-right" href="${project.link}">Check it out! <i class="fa-solid fa-chevron-right cto-i"></i></a></div>
            </div>
        </div>
        <div class="empty"></div>
    `;
   projectsContainer.innerHTML += projectHTML;
});

// Intersection Observers
const observerLeft = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show-left');
      } else {
         entry.target.classList.remove('show-left');
      }
   });
});

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show-right');
      } else {
         entry.target.classList.remove('show-right');
      }
   });
});

const hiddenRightElements = document.querySelectorAll('.hidden-right');
hiddenRightElements.forEach((el) => observerRight.observe(el));
