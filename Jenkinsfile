pipeline {
    agent { 
        docker { image 'node:18-alpine' }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh '''
                        echo "Starting build"
                        apk add --no-cache sudo
                        sudo chown -R $(id -u):$(id -g) /var/lib/jenkins/workspace
                        adduser -D builduser
                        chown -R builduser:builduser /var/lib/jenkins/workspace
                        su builduser -c "npm ci && npm run build"
                    '''
                }
            }
        }
    }
}


