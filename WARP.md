# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a simple HTML-based test repository designed for learning pull requests and basic open source contribution workflows. The project consists of static HTML files with no build system or complex architecture.

## File Structure

The repository contains three main files:
- `index.html` - Main HTML page with basic structure
- `navbar.html` - Navigation component with simple menu items
- `README.md` - Repository description and purpose

## Common Commands

### Viewing Files
```bash
# Open the main HTML file in a browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Version Control Operations
```bash
# View recent changes
git log --oneline -10

# Check current status
git status

# Create a new feature branch
git checkout -b feature/your-feature-name

# Stage and commit changes
git add .
git commit -m "Add your descriptive commit message"

# Push changes for pull request
git push origin feature/your-feature-name
```

### Development Workflow

Since this is a static HTML project with no build process:

1. **Making Changes**: Edit HTML files directly in your preferred editor
2. **Testing**: Open `index.html` in a web browser to view changes
3. **Contributing**: Follow the pull request workflow as this is a learning repository

### Repository Context

This repository was created as an educational tool for:
- Learning Git and GitHub workflows
- Practicing pull request creation and review
- Understanding basic open source contribution processes

The codebase intentionally keeps things simple with no frameworks, build tools, or testing infrastructure to focus on Git/GitHub learning objectives.

### Git History

The repository has a simple history:
- Initial commit with basic structure
- Addition of navbar feature through pull request
- Merge of navbar feature to main branch

This demonstrates a basic collaborative workflow suitable for beginners learning open source contribution.
