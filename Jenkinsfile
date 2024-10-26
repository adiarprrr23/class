pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                script {
                    // Update package list and install npm if not installed
                    sh 'sudo apt update && sudo apt install -y npm'
                    sh 'node -v && npm -v'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Use npm ci for a clean install
                    sh 'npm ci'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the project
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
    }
}
