# Personal Website

This project is a personal portfolio website for Hugo Prado, showcasing skills, projects, and background. The website is built using HTML, CSS, and JavaScript, and can be easily deployed using Docker.

## Project Structure

- `Dockerfile`: Contains instructions to build a Docker image for the personal website application.
- `index.html`: The main HTML document for the personal website.
- `script.js`: JavaScript code for DOM manipulation, theme toggling, and smooth scrolling.
- `style.css`: CSS styles for layout, colors, and responsive design.

## Getting Started

To build and run the Docker container for this personal website, follow these steps:

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd personal-website
   ```

2. **Build the Docker image**:
   ```
   docker build -t personal-website .
   ```

3. **Run the Docker container**:
   ```
   docker run -d -p 8080:80 personal-website
   ```

4. **Access the website**:
   Open your web browser and navigate to `http://localhost:8080` to view the personal website.

## License

This project is licensed under the MIT License.