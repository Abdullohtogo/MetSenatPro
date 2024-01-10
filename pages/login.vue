<template>
  <section class="">
    <div class="flex gap-2 pt-[150px] justify-center pb-[48px] xl:pt-[203px] ">
      <img src="/logo.svg" alt="" class="xs:w-[200px] sm:w-[254px]"/>
      <p class="text-[13px] w-12 h-[23px] bg-red text-white rounded-md xs:mt-0.5 sm:mt-1"><span class="pl-1.5">CLUB</span></p>
    </div>
    <div class="bg-white xs:w-[300px] sm:w-[379px] mx-auto rounded-md">
      <div class="p-[32px]">
        <h1 class="text-[24px] font-bold">Kirish</h1>
        <form class="flex flex-col gap-[22px] mt-[44px]">
          <div class="flex flex-col">
            <label for="name" class="font-semibold text-[14px] mb-1">LOGIN</label>
            <Input placeholder="enter your username..." name="name" id="name"/>
          </div>
          <div class="flex flex-col">
            <label for="password" class="font-semibold text-[14px] mb-1">PAROL</label>
            <Input type="password" placeholder="enter your password..." name="password" id="password"/>
          </div>
          <div>
            captcha
          </div>
          <Button textButton="Get Started"/>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Input from "../components/base/input/input.vue";
import Button from "../components/base/button/button.vue";
</script>