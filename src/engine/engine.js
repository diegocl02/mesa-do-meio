const findFriends = (map, friends) => {
    return (friends.filter((el) => el.map[0] == map.position[0] && el.map[1] == map.position[1]))
}

export const isValidNewPosition = (pos, map, friends) => {
    let friendsAround
    if (friendsAround = findFriends(map, friends))
    {
        if (friendsAround.some(friend => friend.position[0] == pos[0] && friend.position[1] == pos[1]))
            return false
    }
    // when goes left outside
    if (pos[0] < 0)
        return false
    // when goes right outside
    if (pos[0] >= map.layout[0].length)
        return false
    // when goes up outside
    if (pos[1] < 0)
        return false
    // when goes down outside
    if (pos[1] >= map.layout.length)
        return false
    if (map.layout[pos[1]][pos[0]] != 0)
        return false
    return true
}

export const isChangeNewMap = (pos, subMap, map, mapPos) => {
    if (pos[0] < 0 && mapPos[0] > 0)
        return true
    // when goes right outside
    if (pos[0] >= subMap[0].length && mapPos[0] < map[0].length - 1)
        return true
    // when goes up outside
    if (pos[1] < 0 && mapPos[1] > 0)
        return true
    // when goes down outside
    if (pos[1] >= subMap.length && mapPos[1] < map.length - 1)
        return true
    return false
}

export const getNewPosOnMap = (pos, subMap, map, mapPos) => {
    if (pos[0] < 0 && mapPos[0] > 0)
        return [subMap[0].length - 1, Math.floor(subMap.length / 2)]
    // when goes right outside
    if (pos[0] >= subMap[0].length && mapPos[0] <= map[0].length - 1)
        return [0, Math.floor(subMap.length / 2)]
    // when goes up outside
    if (pos[1] < 0 && mapPos[1] > 0)
        return [Math.floor(subMap[0].length / 2), subMap.length - 1]
    // when goes down outside
    if (pos[1] >= subMap.length && mapPos[1] <= map.length - 1)
        return [Math.floor(subMap[0].length / 2), 0]
}

export const getNewMapPos = (pos, subMap, map, mapPos) => {
    // when goes left outside
    if (pos[0] < 0 && mapPos[0] > 0)
        return [mapPos[0] - 1, mapPos[1]]
    // when goes right outside
    if (pos[0] >= subMap[0].length && mapPos[0] <= map[0].length - 1)
        return [mapPos[0] + 1, mapPos[1]]
    // when goes up outside
    if (pos[1] < 0 && mapPos[1] > 0)
        return [mapPos[0], mapPos[1] - 1]
    // when goes down outside
    if (pos[1] >= subMap.length && mapPos[1] <= map.length - 1)
        return [mapPos[0], mapPos[1] + 1]
}

const checkProximity = (posA, posB) => {
    if (posB[0] - 1 == posA[0] && posB[1] == posA[1])
        return true
    if (posB[0] + 1 == posA[0] && posB[1] == posA[1])
        return true
    if (posB[0] == posA[0] && posB[1] + 1 == posA[1])
        return true
    if (posB[0] == posA[0] && posB[1] - 1== posA[1])
        return true
    return false
}

export const findCloseFriend = (position, friends, map) => {
    let friend
    if (friend = friends.find((el) => el.map[0] == map.position[0] && el.map[1] == map.position[1])) {
        if (checkProximity(position, friend.position))
            return friend
    }
    else
        return false
}