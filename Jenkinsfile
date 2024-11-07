pipeline {
    agent any

    tools {
        // Use the configured Node.js version, replace "nodejs_16" with the name you gave in Jenkins tool configuration
        nodejs 'nodejs_16'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Verify Node and NPM versions
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm ci
                    sh 'npm ci'
                }
            }
        }

        // Uncomment if build step is needed
        // stage('Build') {
        //     steps {
        //         script {
        //             // Build the project
        //             sh 'npm run build'
        //         }
        //     }
        // }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
        
        stage('Docker') {
            steps {
                script {
                    // Define the Docker image name and tag
                    def imageName = "your-image-name"
                    def imageTag = "latest"

                    // Build the Docker image
                    sh "docker build -t ${imageName}:${imageTag} ."
                    sh "echo docker build success"

                    // Log in to Docker Hub or another registry
                    sh "echo qwerty123@@ | docker login -u suarim --password-stdin"

                    // Push the Docker image to the repository
                    sh "docker push ${imageName}:${imageTag}"
                }
            }
        }
    }
}
