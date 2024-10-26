pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
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