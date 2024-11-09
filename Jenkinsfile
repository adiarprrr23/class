pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                script {
                    try {
                        sh 'npm ci --cache'
                        sh 'npm run build'
                    } catch (Exception e) {
                        error "Build failed: ${e.message}"
                    }
                }
            }
        }
    }
}
