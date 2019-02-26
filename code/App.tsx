import { Data, animate, Override, Animatable } from 'framer'

const data = Data({
  scale: Animatable(1),
  password: '',
  inputOpacity: Animatable(0.33),
  keyboardBottom: Animatable(-292),
})

export const Key: Override = props => {
  let keyCharacter = props.children[0].props.children[0].props.text
  return {
    onTap() {
      let newPassword = data.password
      newPassword += keyCharacter
      data.password = newPassword
    },
  }
}

export const InputString: Override = props => {
  return {
    text: data.password,
    opacity: data.inputOpacity,
  }
}

export const BackSpace: Override = props => {
  return {
    onTap() {
      let newPassword = data.password
      newPassword = newPassword.slice(0, -1)
      data.password = newPassword
    },
  }
}

// Make Keyboard Toggle
export const KeyBoard: Override = props => {
  return {
    bottom: data.keyboardBottom,
  }
}

export const Input: Override = props => {
  return {
    onTap() {
      animate.easeInOut(data.keyboardBottom, 0, {
        duration: 0.4,
      })
      // change input visibility
      animate.ease(data.inputOpacity, 1, {
        duration: 0.3,
      })
    },
  }
}

export const Background: Override = props => {
  return {
    onTap() {
      animate.easeInOut(data.keyboardBottom, -292, {
        duration: 0.4,
      })

      // change input visibility
      animate.ease(data.inputOpacity, 0.33, {
        duration: 0.3,
      })
    },
  }
}
