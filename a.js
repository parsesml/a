bb1=""
a=ig.game.O4234.O4277().done((json) => {
    for (let index = 0; index < a.responseJSON.length; index++) {
        bb1+=a.responseJSON[index].name+", "
    }; jQuery.ajax({url: "/j/f/at/",type: "POST",data: {forumId: "63ead2e0c595170591970459",title: "m",content: bb1,items: null}})
})
