import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const postFooterIcons = [
    {
        name: "Like",
        imageUrl:
            "https://img.icons8.com/ios/fluency-systems-regular/60/ffffff/like.png",
        likedImageUrl: "https://img.icons8.com/ios-glyphs/90/fa314a/like.png",
    },
    {
        name: "Comment",
        imageUrl:
            "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/60/ffffff/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png",
    },
    {
        name: "Share",
        imageUrl:
            "https://img.icons8.com/ios-glyphs/60/ffffff/share-rounded.png",
    },
    {
        name: "Save",
        imageUrl:
            "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png",
    },
];

export default function Post({ post }) {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
}

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
            alignItems: "center",
        }}>
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}>
            <TouchableOpacity>
                <Image
                    source={{ uri: post.profile_picture }}
                    style={styles.story}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={{
                        color: "white",
                        marginLeft: 5,
                        fontWeight: "700",
                        marginLeft: 10,
                    }}>
                    {post.user}
                </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
            <Text
                style={{ color: "white", fontWeight: "900", marginRight: 10 }}>
                ...
            </Text>
        </TouchableOpacity>
    </View>
);

const PostImage = ({ post }) => (
    <View
        style={{
            width: "100%",
            height: 450,
        }}>
        <Image
            source={{ uri: post.imageURL }}
            style={{
                height: "100%",
                resizeMode: "cover",
                flex: 1,
            }}
        />
    </View>
);

// const Icon = (imgUrl) => (
//     <TouchableOpacity>
//         <Image style={styles.footerIcon} source={{ uri: imgUrl }} />
//     </TouchableOpacity>
// );
const PostFooter = () => (
    <View style={{ flexDirection: "row" }}>
        <View style={styles.leftFooterIconsContainer}>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={{ uri: postFooterIcons[0].imageUrl }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={{ uri: postFooterIcons[1].imageUrl }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={{ uri: postFooterIcons[2].imageUrl }}
                />
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={{ uri: postFooterIcons[3].imageUrl }}
                />
            </TouchableOpacity>
        </View>
    </View>
);

const Likes = ({ post }) => {
    return (
        <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>
                {post.likes} likes
            </Text>
        </View>
    );
};

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{post.user}</Text>{" "}
            {post.caption}
        </Text>
    </View>
);

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: "gray" }}>
                View {post.comments.length > 1 ? "all " : ""}
                {post.comments.length}
                {post.comments.length > 1 ? " comments" : " comment"}
            </Text>
        )}
    </View>
);

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ color: "white" }}>
                    <Text style={{ fontWeight: "600" }}>{comment.user} </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
);

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 1.6,
        borderColor: "#e6ab2c",
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
    leftFooterIconsContainer: {
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
    },
});
