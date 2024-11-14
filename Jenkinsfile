pipeline {
    agent { 
        docker { 
            image 'node:16-alpine' 
            args '--user root'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh '''
                    chown -R $(whoami) ~/.npm
                    chown -R $(whoami) /var/lib/jenkins/workspace
                    npm cache clean --force
                    npm i
                    npm test
                    '''
                }
            }
        }
    }
}


