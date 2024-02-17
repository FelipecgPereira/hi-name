pipeline{
    agent any
    stages{
        stage('Build Image'){
            steps{
                script{
                    dockerapp = docker.build("felipepereiracg/hi-name:${env.BUILD_ID}", '-f ./dockerfile ./' )
                }
            }
        }

        stage('Push Image'){
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub'){
                    dockerapp.push('latest')
                    dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
    }
}