import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import './modalex.css'

function ModalEx () {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className='button_btn'>
          <Button color='blue'>Hire me</Button>
        </div>
      }
    >
      <Modal.Header>Welcome Sir/ma'am</Modal.Header>
      <Modal.Content image>
        <Image
          size='medium'
          src='https://previews.123rf.com/images/bearsky23/bearsky231607/bearsky23160700040/60624434-man-in-suit-holding-hire-me-sign.jpg'
          wrapped
        />
        <Modal.Description>
          <Header>React Developer</Header>
          <p>
            A computer science majored individual with practical
            hands-on-approach in MERN stcak. Self taught in Full Stack
            Develoment technologies. A dedicated, organized person and also an
            excellent team worker. Keen and very willing to learn and develop
            new skills. My passion is all about creating real elegant looking
            Applications.
          </p>
          <p>
            If you are searching for a reputable web developer with proven
            hands-on skills.then, you're in the right place.
            <b>Get in touch to discuss your needs now!</b>
          </p>
          <p>
            <Icon name='mail' size='large' color='blue' />
            sakthi4645@gmail.com
          </p>
          <p>
            <Icon name='phone' size='large' color='blue' />
            9047609410
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content='Okay'
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEx
