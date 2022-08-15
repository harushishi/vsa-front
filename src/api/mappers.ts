import { TFollowing, TPost, TUser, TUserPost } from "./types";
import { userApi } from "./userApi";

export const getUserFollows = async (user: TUser) => {

    async function fetchFollowedUsers() {
        const { data } = await userApi(`/following/${user.id}`)
        const followingIds: Number[] = []
        data.map((e: TFollowing) => followingIds.push(e.followedUserId))
        return followingIds
    }

    //hasta aca tengo los usuarios que sigue
    const userIds: Number[] = await fetchFollowedUsers()

    const promises = userIds.map(user => userApi(`/${user}`))

    const users = await Promise.all(promises).then(res => {
        let users: TUser[] = []

        res.forEach(res => {
            users = users.concat(res.data)
        })

        return users;
    })

    return users
}

export const getUsersPosts = async (users: TUser[]) => {

    let userPosts: TUserPost[] = []

    users.map(u => {
        let posts: TPost[] = []
        userPosts.push({ ...u, posts })
    })

    const promises = users.map(user => userApi(`/posts/${user.id}`))

    const posts = await Promise.all(promises).then(res => {
        let posts: TPost[] = []

        res.forEach(res => {
            posts = posts.concat(res.data)
        })

        return posts
    })

    userPosts.forEach(user => {

        posts.forEach(post => {
            if (post.authorId === user.id) {
                user.posts.push(post)
            }
        })

        // posts.sort((a: TPost, b: TPost) => {
        //     return new Date(b.createdAt).getTime() - (new Date(a.createdAt).getTime())
        // })
    })

    return userPosts
}

