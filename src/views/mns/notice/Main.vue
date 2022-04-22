<template>
    <div>공지사항</div>
    <div id="main" style="padding-top: 0px">
        <form
            id="noticeForm"
            name="noticeForm"
            action="/app.php?m=noticeDetail"
        >
            <input type="hidden" id="iSeq" name="iSeq" />
        </form>

        <div class="notice_board">
            <input type="hidden" id="totalPage" value="4" />
            <input type="hidden" id="nPage" value="1" />
            <ul id="recentNoticeList">
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >테스트</router-link
                            >
                        </h3>
                        <p>2022-02-07</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >ㅇㅁㄴㅇ나ㅓㅍㄴ아ㅓ롱나롱나ㅓ뢍놀나어롱나론아로나ㅓㅇ롸ㅓㄴㅇㅁㅇㅁ;남ㄴ;ㅣ아;ㅁ니ㅏㅇ;미낭;민아민이ㅏㅁㄴ모라ㅣ엄니ㅏ어마ㅣㄴ엄니ㅏ어ㅏㅁ니엄니ㅏ엄니ㅏ엄니ㅏ언마ㅣ어ㅣㅁ</router-link
                            >
                        </h3>
                        <p>2021-11-01</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >나는야 김예빈
                                테스트야야야야야야야야야야야야야야야야야야야야야야</router-link
                            >
                        </h3>
                        <p>2021-10-26</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >21년 08월 05일 테스트</router-link
                            >
                        </h3>
                        <p>2021-08-05</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >02/04 테스트</router-link
                            >
                        </h3>
                        <p>2021-02-04</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >ㅁㄴㅇ</router-link
                            >
                        </h3>
                        <p>2021-02-01</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >teastd</router-link
                            >
                        </h3>
                        <p>2021-01-18</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >N아이콘 테스트</router-link
                            >
                        </h3>
                        <p>2019-09-20</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >공지이이이이이</router-link
                            >
                        </h3>
                        <p>2016-12-01</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>
                            <router-link to="/mns/noticeDetail"
                                >테스트 공지사항20</router-link
                            >
                        </h3>
                        <p>2016-11-28</p>
                    </div>
                </li>
            </ul>
            <p>
                <button id="search_more" onclick="fncNextList();">
                    더보기(1/4)
                </button>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {};
    },

    methods: {},
});
</script>

<style lang="scss" scoped></style>
