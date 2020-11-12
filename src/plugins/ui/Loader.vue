<template>
    <div>
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42vh;
}

.loader > span {
  display: inline-block;
  background-color: dodgerblue;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 8px;
  transform: translate3d(0);
  animation: bounce 0.6s infinite alternate;
}

.loader > span:nth-child(2) {
  background-color: navy;
  animation-delay: 0.2s;
}

.loader > span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translate3d(0, -24px, 0);
  }
}
</style>