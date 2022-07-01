import React from 'react';
import {
  Input,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Label,
  Spinner,
} from 'reactstrap';
import { API, graphqlOperation } from 'aws-amplify';

import * as queries from '../../graphql/queries';
import './homeChurchContactModal.scss';
import { isMobileOnly } from 'react-device-detect';

interface Props {
  show: any;
  homeChurchId?: any;
  handleClose: any;
}

interface State {
  sending: boolean;
  error: any;
}

class HomeChurchContactModal extends React.Component<Props, State> {
  nameInput: any;
  emailInput: any;
  messageTextArea: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      sending: false,
      error: null,
    };
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.messageTextArea = React.createRef();
  }

  handleCancel = () => {
    this.setState({ error: null });
    this.props.handleClose();
  };

  handleContactSubmit = () => {
    this.setState({ sending: true, error: null });
    const payload = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      message: this.messageTextArea.current.value,
      homeChurchId: this.props.homeChurchId,
    };
    console.log(
      'HomeChurchContactModal.handleContactSubmit(): Payload: %o',
      payload
    );
    const emailHomeChurch: any = API.graphql(
      graphqlOperation(queries.emailHomeChurch, payload)
    );
    emailHomeChurch
      .then(
        (response: any) => {
          const error = response.data.emailHomeChurch.err;
          this.setState({ sending: false, error: error });
          if (error) {
            console.error('Error submitting contact form: %o', error);
          } else {
            this.props.handleClose();
          }
        },
        (error: any) => {
          console.error('Error submitting contact form: %o', error);
          this.setState({ sending: false });
          this.props.handleClose();
        }
      )
      .catch((error: any) => {
        console.error('Error submitting contact form: %o', error);
        this.setState({ sending: false });
        this.props.handleClose();
      });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.show}
        toggle={this.props.handleClose}
        className="ContactLeadersModal"
        centered={true}
      >
        <ModalHeader>Contact Leaders</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                innerRef={this.nameInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                innerRef={this.emailInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                rows="4"
                name="text"
                id="message"
                innerRef={this.messageTextArea}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter
          style={
            !isMobileOnly
              ? { justifyContent: 'flex-start', padding: '0.75rem 1.3rem' }
              : {
                  height: '7vh',
                  justifyContent: 'flex-start',
                  padding: '0.5rem 1.3rem',
                }
          }
        >
          {this.state.sending ? (
            <div className="FooterProgress">
              <Spinner /> Sending message
            </div>
          ) : null}
          {this.state.error ? (
            <div className="FooterError">
              Failed to send the message. <br />
              Please try again later.
            </div>
          ) : null}
          <Button
            color="secondary"
            disabled={this.state.sending}
            onClick={this.handleContactSubmit}
          >
            Send Message
          </Button>
          <Button
            color="secondary"
            disabled={this.state.sending}
            onClick={this.handleCancel}
          >
            Cancel
          </Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}

export default HomeChurchContactModal;
