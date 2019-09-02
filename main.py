# ~/.zshrc

# ADD zsh-nvm to the plugins
plugins=(git zsh-nvm)

# this already exists
source $ZSH/oh-my-zsh.sh

# ADD THIS
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm