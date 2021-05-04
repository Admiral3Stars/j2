// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

const bigText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem reiciendis dolorem iste repellat, magni consequuntur culpa repudiandae mollitia in! Inventore voluptatibus quo excepturi numquam 'cupiditate' nostrum est dolor incidunt? Ullam iusto adipisci numquam culpa dignissimos alias impedit saepe, suscipit, aliquid amet nemo deserunt ipsam? Illo nemo quibusdam quaerat exercitationem, laboriosam ducimus doloribus fugiat blanditiis ab enim 'consectetur' dolor cumque? 'Consectetur, eum', veritatis similique magni ipsam quas laboriosam tempora officia laudantium cumque, iusto sunt et quo doloribus! Praesentium sed iusto facere eos ipsum molestiae deleniti quos, suscipit consequuntur aliquam alias! Quidem consequatur ea error aren't dicta dolore. Nam, iste? Fugiat, inventore asperiores error reiciendis impedit quia quo eos, praesentium labore ducimus sint. Consequatur mollitia, exercitationem molestias provident a voluptatibus facere perspiciatis?";

const option = /\'(.+?)\'/g;
let result = bigText.replace(option, "\"$1\"");
console.log(result);