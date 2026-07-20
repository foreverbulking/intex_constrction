import { agentConfig } from './agent.config.js'

const agent = new window.PageAgent(agentConfig)

document.getElementById('run').addEventListener('click', () => {
  agent.execute(document.getElementById('task').value)
})
