export default (state) => {
    const userId = state.auth.userId;
    if(!userId) return [];
    const follows = state.follows.collection;
    const followArr = Object.keys(follows).map(id => follows[id])
    return followArr.filter(follow => {
        if(follow.followsId !== userId) return false;
        if(follow.isApproved) return false;
        return true;
    });
}