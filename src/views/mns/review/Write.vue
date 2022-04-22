<template>
  <!-- <div>리뷰 작성 입니다.</div> -->
  <div id="wrap">
    <header id="header">
      <div class="floatclear">
        <h1>
          <a href="#"
            ><img
              src="../../../assets/img/icon/Components_Back_button.png"
              alt="back" /></a
          ><button>리뷰작성</button>
        </h1>
      </div>
    </header>
    <!--//header-->

    <main id="main">
      <div class="write-review_box fixBtn_mb">
        <ul class="give-score">
          <li>
            <h2>배달 기사님은 친절 하셨나요?</h2>
            <ul class="floatclear">
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star">1점</button></li>
              <li><span>0.4</span></li>
            </ul>
          </li>
          <li>
            <h2>주문하신 음식은 맛있었나요?</h2>
            <ul class="floatclear">
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star on">1점</button></li>
              <li><button class="blind review_star">1점</button></li>
              <li><span>0.4</span></li>
            </ul>
          </li>
        </ul>
        <!--//give_score-->
        <div class="review-text">
          <textarea placeholder="최소 10자 이상 솔직한 리뷰를 남겨주세요!">
면이 살짝 불기는 했지만 해물도 많았어요! 맛있게 잘먹었어요  맛있게 잘먹었어요면이 살짝 불기는 했지만 해물도 많았어요! 맛있게  잘먹었어요 면이 살짝 불기는 했지만 해물도 많았어요! 맛있게 잘먹었어요  맛있게 잘먹었어요면이 살짝 불기는 했지만 해물도 많았어요! 맛있게  잘먹었어요</textarea
          >
          <span>250/300</span>
        </div>
        <ul class="floatclear photo_list">
          <li><p>1/3</p></li>
          <li class="add-photo">
            <span
              ><img src="../../../assets/img/main/img_02.png" alt="짬뽕"
            /></span>
            <i
              ><button>
                <img
                  src="../../../assets/img/history/btn_delete_balck.png"
                  alt="삭제"
                /></button
            ></i>
          </li>
          <li class="add-photo">
            <span
              ><img src="../../../assets/img/main/img_05.png" alt="짬뽕"
            /></span>
            <i
              ><button>
                <img
                  src="../../../assets/img/history/btn_delete_balck.png"
                  alt="삭제"
                /></button
            ></i>
          </li>
          <li class="add-photo">
            <span
              ><img src="../../../assets/img/main/img_02.png" alt="짬뽕"
            /></span>
            <i
              ><button>
                <img
                  src="../../../assets/img/history/btn_delete_balck.png"
                  alt="삭제"
                /></button
            ></i>
          </li>
        </ul>
        <!--//photo_list-->
      </div>
      <!--//write_review_box-->
    </main>
    <!--//main-->
    <p class="btn-style1 fixBottom"><button class="on">작성완료</button></p>
  </div>
  <!--//wrap-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },

  methods: {},
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/review/_review.scss';
</style>
