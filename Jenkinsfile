pipeline {
    agent {
        label "any"
    }

    stages {
        stage('build'){
            steps{
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                 sh 'ls -la'
                }
             }
        }

        stage("unit Testing") {
            steps {
                sh 'ls -la'
            }
        }


        stage('Stage to deploy') {
            steps{
                script{
                  sh 'ls -la'
                }
            }

        }

        stage('Acceptance test') {
            steps{
                     sh 'ls -la'
            }
        }
    }
}
