<template>
  <div
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#3a2b7c] via-[#5f4bb6] to-[#2ec6f6]"
  >
    <div class="flex flex-col items-center">
      <svg class="animate-spin h-16 w-16 text-white drop-shadow-lg" viewBox="0 0 50 50">
        <circle
          class="opacity-20"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="white"
          stroke-width="6"
        />
        <circle
          class="opacity-80"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#ffe066"
          stroke-width="6"
          stroke-linecap="round"
          stroke-dasharray="31.4 188.4"
        />
      </svg>
    </div>
  </div>
</template>
