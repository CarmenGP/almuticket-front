<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:1000px; height:450px; margin:12px" src="https://user-images.githubusercontent.com/116545851/224990921-19f8cfa0-c88d-4367-960a-cc7769223c58.png" alt="My AlmuTicket"/>
</div>

<h2>1. AlmuTicket: Project Description</h2>

Create an internal APP for Asociación Arrabal in order to centralize all the requests currently received by Almudena(the receptionist) from different sources and people.

This web application will allow to generate tickets with requests, incidents and room reservations to the people who are part of Arrabal from their cell phones or desktops and to Almudena to manage them all from only one place: AlmuTicket app.

This readme corresponds to the frontend development of the application, which is complemented by the backend development located in the repository https://github.com/Himorell/almuTicketApi

<h2>2. User Stories</h2>
<h4>2.1 Administrator</h4>
<ul>
<li>It’s necessary to have a view to see the tickets created by the user (Read).</li>
<li>A view is needed to manage existing tickets (Update).</li>
<li>A button is needed to change the status of a ticket (Viewed, pending, pending, finished, rejected).</li>
<li>Need to reject the status of a ticket. The application will automatically send an email to inform the user about the rejected status of their request.</li>
<li>It’s necessary to close the status of a ticket and the application will automatically send an email to inform the user about the resolved status of their request.</li>
</ul>
    
<h4>2.2 Users</h4>     
<ul>
<li>A button is needed for registration.</li>
<li>A button is needed for login.</li>
<li>A button is needed for a ticket to be created (Create).</li>
<li>The user will be able to see a list with the tickets that he has created (Read).</li>
<li>The user will receive an automated email informing him that his ticket has been resolved.</li>
<li>The user will receive an automated email informing them that their ticket has been rejected.</li>
</ul>

<h4>2.3 Additional features (Users)</h4>     
<ul>
<li>That the user has a button to delete the tickets created while it remains in the "Issued" status.</li>
</ul>
   
<h2>3. Fullstack Developer Team and GitHub Links</h2>

<ul dir="auto">
<li>
<p dir="auto"><a href="https://github.com/CarmenGP">Carmen Gallardo Pozo</a> - Developer</p>
</li>
<li>
<p dir="auto"><a href="https://github.com/CarmenCruces">Carmen Cruces Fernández</a> - Product Owner and Developer</p>
</li>
<li>
<p dir="auto"><a href="https://github.com/Himorell">Himorell Jaramillo</a> - Scrum Master and Developer</p>
</li>
<li>
<p dir="auto"><a href="https://github.com/LolaGM">Lola García Morcillo</a> - Developer</p>
</li>
<li>
<p dir="auto"><a href="https://github.com/FlorTiscornia">Flor Tiscornia</a> - Developer</p>
</li>
 <li>
<p dir="auto"><a href="https://github.com/raquel2002x">Raquel Palomo Fuentes</a> - Developer</p>
</li>
  <li>
<p dir="auto"><a href="https://github.com/sandraldr27">Sandra León</a> - Developer</p>
</li>
  <li>
<p dir="auto"><a href="https://github.com/pagudelo884">Paula Ramírez</a> - Developer</p>
</li>
</ul>

<h2>4. Project Demo</h2>

<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:780px; height:390px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228353492-7fdf086b-d898-474f-ab59-91c81ac1dac4.jpg" alt="Project Demo"/>
</div>

<h2>5. Atomic Design</h2>

<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228356422-cccd6d65-11a4-4855-8c99-c184891e0f69.png" alt="Atomic Design 1"/>
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228356895-5a13cc06-9da3-427d-aa17-9536b869179a.png" alt="Atomic Design 2"/>
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228357051-fb898380-6f65-4b61-b501-1192b371ddd0.png" alt="Arrabal Logo White"/>    
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228357192-250de3dc-8c24-4165-98e8-31948d9d44ea.png" alt="Arrabal Logo Orange"/>      
</div>

<h2>6. Final Design</h2>
<h3>6.1 Mobile View</h3>
<h4>User Mobile view</h4>
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228358183-6599352a-bfd3-441c-b4c7-8482f1ec3a70.png" alt="User Mobile View 1"/>
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228358310-4e0cbda1-6960-4680-af30-d5009998892f.png" alt="User Mobile View 2"/>
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228358521-cb5f6fb6-d8d8-4556-87d0-a48180619de4.png" alt="User Mobile View 3"/>    
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228358676-71a8d3ce-bdfb-4302-be99-06874fe06fe3.png" alt="User Mobile View 4"/>  
</div>

<h4>Mobile View of Tickets</h4>
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228362093-5d98ad3e-5842-4f59-b2b4-a8c1915b2e7e.png" alt="Booking View Ticket"/>
<img style="width:190px; height:320px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228362180-0408e224-1f3f-4981-a601-bb6dfa52631f.png" alt="Incident View Ticket"/>
</div>

<h3>6.2 Computer views (Common administrator and user)</h3>
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228364641-dd4bdf17-6eeb-4f89-a744-eeb7d3de9f72.png" alt="Register"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228364781-edbfdefc-7c7a-475c-ba4b-90ce17d1efc4.png" alt="Ingress"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228364990-c1c9c2ad-d6c1-43dd-bd2c-29e49a3e8511.png" alt="Generate Ticket"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228365179-ffca49aa-929e-4d98-9eb5-3eaddbc3945b.png" alt="Tickets List"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228365439-0ca07a3b-676c-4a11-8415-72975678a3b2.png" alt="Create Booking"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228365615-6fd8a083-f241-4fc1-ab6a-252f9278ee22.png" alt="Create Incidence"/>
</div>

<h3>6.3 Exclusive administrator view</h3>
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228367171-48602556-f44d-490b-a72a-80f908c68cd3.png" alt="Tickets List"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228367392-d976a442-400f-4e37-9d52-5bef7c3b4e90.png" alt="Gestion Reservs"/>
<img style="width:390px; height:270px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228367588-35930bea-40df-4f10-acd2-1979d64257ae.png" alt="Gestion Incidences"/>
</div>

<h2>7. Stacks and technologies</h2>

 <p align="left">
 <img src= "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
 <img src= "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
 <img src= "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
 </p>
 
 <p>
  <img src= "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"></img>
  <img src= "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img> 
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"></img>
 </p>
 
 <p>
  <img src= "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"></img>
  <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"></img>
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"></img>
 </p>
 
<h2>8. Other Tools</h2>

 <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"></img>
 <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"></img>
 <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"></img>
 <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"></img>


<h2>9. Methodology</h2>

* Agile (SCRUM) 
* Mob programming
* Pair programming
* Single programming
* TDD 

<h2>10. Core skills</h2>

 * MVC Design pattern.
 * Git version control system.
 * User stories and tasks implementation (Trello).
 * Communication and self-evaluation.


<h2>11. How to install</h2>
<h4>11.1 Required:</h4>
<li>NPM Installed.</li>
<li>VUE Installed and updated to latest version</li>
<li>MySQL.</li><br>

<h4>11.2 To install our project</h4>
<ul>
<li>Open IDE</li>
<li>Copy in the terminal: git clone https://github.com/CarmenGP/almuticket-front</li>
<li>In the IDE run <b>git clone</b> command, an paste the HTTPS.</li>
<li>Write in the IDE terminal (In the project folder) the command: <b>npm install vue</b>.</li>
<li>Type in the IDE terminal: <b>npm run format</b> and press intro.</li>
<li>Type in the IDE terminal: <b>npm run dev</b> and press intro. It will open the port http://localhost:5173/ from where we can view the project</li>
<li>Type in the IDE terminal: <b>npm install -D tailwindcss@latest postcss@latest autoprefixer@latest</b> and press intro to install Tailwind</li>
<li>Type in the IDE terminal: <b>npm install bootstrap</b> and press intro to install Bootstrap</li>
<li>Type in the IDE terminal: <b>npm install datatables.net-dt</b> and press intro to install DataTables.net</li>
<li>Type in the IDE terminal: <b>npm install axios</b> and press intro to install Axios</li>
<li>Type in the IDE terminal: <b>npm install emailjs-com</b> and press intro to install EmailJS</li>
<li>Type in the IDE terminal: <b>npm install pdfmake</b> and press intro to install PDF Make</li>
<li>Type in the IDE terminal: <b>npm install pdfmake/build/vfs_fonts.js</b> and press intro to install PDF Fonts</li>
<li>Type in the IDE terminal: <b>npm install jszip</b> and press intro to install JSZip</li>
</ul>

<h4>11.3 Warning & Testing</h4>
<div style="display:flex; flex-wrap:wrap; justify-content:center; margin:auto">
<img style="width:780px; height:390px; margin:12px" src="https://user-images.githubusercontent.com/116546588/228353492-7fdf086b-d898-474f-ab59-91c81ac1dac4.jpg" alt="testBackend"/>
</div>

<h2>12. Next steps</h2>
<ul>
<li>Frontend test</li>
<li>Implementation of more functionality in tables.</li>    
<li>Connection of all components with AXIOS.</li>    
<li>Enable route to show views from tickets.</li> 
<li>Implement media query in Frontend.</li>
<li>Implement the view of the helper CRUD's.</li>
<li>Automatic sending of emails, using EmailJS.</li>
</ul>



