pipeline {
    environment {
        dockerImage = "${image}"
    }
    agent any

    stages {
        stage('Derrubando o container antigo') {
            steps {
                script {
                    try {
                        sh 'docker rm -f hi-name-dev'
                    } catch (Exception e) {
                        sh "echo $e"
                    }
                }
            }        
        }        
        stage('Subindo o container novo') {
            steps {
                script {
                    try {
                        sh 'docker run -d -p 3000:3000 --name=hi-name-dev ' + dockerImage + ':latest'
                    } catch (Exception e) {
                        sh "echo $e"
                        currentBuild.result = 'ABORTED'
                        error('Erro')
                    }
                }
            }
        }
        stage ('Fazer o deploy em producao?') {
            steps {
                script {
                    timeout(time: 10, unit: 'MINUTES') {
                        input(id: "Deploy Gate", message: "Deploy em producao?", ok: 'Deploy')
                    }
                }
            }
        }
        stage ('deploy') { 
            steps {
                script {
                    try {
                        build job: 'hi-name-prd', parameters: [[$class: 'StringParameterValue', name: 'image', value: dockerImage]]
                    } catch (Exception e) {
                        sh "echo $e"
                        currentBuild.result = 'ABORTED'
                        error('Erro')
                    }
                }
            }
        }
    }
}