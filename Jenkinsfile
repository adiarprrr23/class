pipeline {
    agent { 
        docker { 
            image 'node:16-alpine' 
            reuseNode true
            args '--user root'
        }
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh '''
                    echo "Adjusting permissions and preparing environment"
                    # Ensure permissions are set correctly for the current user in the container
                    chown -R root /root/.npm
                    chown -R $(whoami) /var/lib/jenkins/workspace
                    chmod -R 755 /var/lib/jenkins/workspace
                    '''
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                    echo "Cleaning npm cache and installing dependencies"
                    npm ci
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh '''
                    echo "Running tests"
                    npm test
                    '''
                }
            }
        }

        stage('Build and Run Container') {
            steps {
                script {
                    sh '''
                    echo "Building Docker container"
                    docker build -t adiarprrr23/new:latest .

                    echo "Running Docker container"
                    docker run -d -p 3000:3000 adiarprrr23/new
                    '''
                }
            }  
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the error logs.'
        }
    }
}
