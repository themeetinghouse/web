import * as React from 'react';
import * as Sentry from '@sentry/browser'
import { EmptyProps } from '../../utils'
interface State {
    error: any
}
export default class ErrorBoundary extends React.Component<EmptyProps, State>  {
    constructor(props: EmptyProps) {
        super(props);
        this.state = { error: null };
    }
    componentDidCatch(error: any) {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;

        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }

        this.setState({ error });
        Sentry.captureException(error);
    }
    render() {
        if (this.state.error) {



            /* return (
                 <div
                     className="snap"
                     onClick={() => Sentry.lastEventId() && Sentry.showReportDialog()}
                 >
    
                     <p>We're sorry — something's gone wrong.</p>
                     <p>Our team has been notified, but click here fill out a report.</p>
                 </div>
             );*/
            return null
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}