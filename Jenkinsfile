pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    volumes {
                        hostPath volume: '/var/lib/jenkins/workspace/App', containerPath: '/app'
                    }
                }
            }
            steps {
                script {
                    try {
                        sh 'cd /app && npm ci --cache && npm run build'
                    } catch (Exception e) {
                        error "Build failed: ${e.message}"
                    }
                }
            }
        }
    }
}
