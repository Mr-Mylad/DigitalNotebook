<script lang="ts">
  // Firebase config
  import { initializeApp } from "firebase/app";
  import firebaseConfig from "./firebaseConfig";
  
  const app = initializeApp(firebaseConfig);
  
  // Real code

  import { onMount } from "svelte";

  // Smooth scroll
  import smoothLoadAnimationAdder from "./smoothLoad";

  onMount(() => {
    setTimeout(() => {
      smoothLoadAnimationAdder("animated");
    }, 0);
  })
</script>

<h1 class="animated">Welcome to DigitalNotebook!</h1>
