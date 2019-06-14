import moment from 'moment';

export default (dateString) => {
    const date = moment(dateString);
    const now = moment()
    if (date.isSame(now, 'hour')) {
        //date is this hour
        //a few seconds ago
        return date.fromNow();
    } else if(date.isSame(now, 'day')) {
        //date is today
        //1:23 pm
        return date.format('h:mm a')
    } else if (date.isSame(now, 'week')) {
        //date is this week
        //Sunday at 1:23 pm
        return date.format('dddd [at] h:mm a');
    } else if (date.isSame(now, 'month')) {
        //date is this month
        //Sunday, February 14 at 1:23pm
        return date.format('dddd, MMMM D [at] h:mm a')
    } else if (date.isSame(now, 'year')) {
        //date is this year
        //February 14
        return date.format('MMMM D')
    } else {
        //date was before this year
        //February 14, 1995
        return date.format('MMMM D, YYYY')
    }
}