<template>
    <div>개인정보 관리</div>
    <div id="main">
        <div class="site_info_list">
            <ul>
                <li><h3>서비스 이용안내</h3></li>
                <!-- 팝업으로 분리  -->
                <li>
                    <router-link to="#cookieGuide">쿠키사용 안내</router-link>
                </li>
                <li>
                    <router-link to="#stampGuide">스탬프 사용안내</router-link>
                </li>
            </ul>

            <ul>
                <li><h3>약관 및 개인정보 처리</h3></li>
                <li>
                    <router-link to="#smartshopClause">이용 약관</router-link>
                </li>
                <li>
                    <router-link to="#personalInfomation"
                        >개인정보 보호방침</router-link
                    >
                </li>
                <li>
                    <router-link to="#informationClause"
                        >개인정보 제3자 동의</router-link
                    >
                </li>
                <li>
                    <router-link to="#locationAgreement"
                        >위치기반 서비스 이용 약관</router-link
                    >
                </li>
                <li>
                    <router-link to="#adolescentClause"
                        >청소년 보호정책</router-link
                    >
                </li>
            </ul>
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
