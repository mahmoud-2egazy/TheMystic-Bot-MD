const dir = [
  'https://i.pinimg.com/originals/3a/78/8d/3a788d8410d80a79dd64ab889c3692f4.jpg', 
  'https://i.pinimg.com/originals/62/74/07/627407167beff8dd326b378cea5dc7cf.jpg',     
  'https://i.pinimg.com/originals/e3/58/64/e358641e626e967665c64820c3d8c6a4.jpg', 
  'https://i.pinimg.com/originals/e6/a7/70/e6a770c5b5987aa9f2f38877557ae1d1.jpg',     
  'https://i.pinimg.com/originals/88/86/fb/8886fbd865fbb92ed364613b17537218.jpg', 
  'https://i.pinimg.com/originals/82/bf/da/82bfda9e347346f6dd90c763cc54bd50.jpg', 
  'https://i.pinimg.com/originals/9b/54/48/9b5448adfec83a0d6ce5e8bc564d7cdf.jpg', 
  'https://i.pinimg.com/originals/09/52/22/095222f10a402e4f26a8a748b42a246e.jpg', 
  'https://i.pinimg.com/originals/cc/3d/89/cc3d89dbbcaa0184e504cd33d7063fa6.jpg', 
  'https://i.pinimg.com/originals/4e/9e/d6/4e9ed691d16710564874f295c79e19bd.png', 
  'https://i.pinimg.com/originals/15/a2/53/15a253f3676412860c66b0ea5ee9a851.jpg', 
  'https://i.pinimg.com/originals/39/fb/90/39fb90479cd17d25a6be4efd51a9260e.jpg', 
  'https://i.pinimg.com/originals/89/2e/9a/892e9a2016c4258bad507fff79762397.png', 
  'https://i.pinimg.com/originals/7f/a9/ed/7fa9ed390f6daeec88938ecddd61f30b.jpg', 
  'https://i.pinimg.com/originals/1e/85/21/1e8521d0a111874352d0d03c639ec824.jpg', 
  'https://i.pinimg.com/originals/86/b1/3a/86b13a7f9f9146a7cc1fd12f7456d08c.jpg', 
  'https://i.pinimg.com/originals/53/a2/07/53a207e5fcb81bd290c10b070b0c962d.jpg', 
  'https://i.pinimg.com/originals/51/11/c1/5111c1fa0bf5833c3563725fe718e329.png', 
  'https://i.pinimg.com/originals/0a/05/91/0a0591e0b1345f4b60b09a1bb20acdb1.jpg', 
  'https://i.pinimg.com/originals/62/74/07/627407167beff8dd326b378cea5dc7cf.jpg', 
  'https://i.pinimg.com/originals/80/13/fd/8013fdec26e43a22669a5e8c38aa13a7.jpg', 
  'https://i.pinimg.com/originals/f6/71/7d/f6717d0dffda72a01a51b8d437e05eba.jpg', 
  'https://i.pinimg.com/originals/f0/3a/45/f03a45f5712852d624a6ebcdf14576ea.png', 
  'https://i.pinimg.com/originals/30/fe/bc/30febc286cec6c96d7428f7533c1f1a5.jpg', 
  'https://i.pinimg.com/originals/93/83/9f/93839f40665e3c3f8a4525686ed9d465.jpg', 
  'https://i.pinimg.com/originals/96/df/4b/96df4ba4179312f887831be52035e027.jpg', 
  'https://i.pinimg.com/originals/32/0a/5e/320a5e28600cdd255b402a3a63531869.jpg', 
  'https://i.pinimg.com/originals/33/d4/42/33d4427dcc2ab306c26a4d255446c425.jpg', 
  'https://i.pinimg.com/originals/7c/23/df/7c23df0613afd333071f7ef3e9d2e0af.jpg', 
  'https://i.pinimg.com/originals/9d/e0/16/9de0163f717a84255383c1fc83f2961b.jpg', 
  'https://i.pinimg.com/originals/8c/a0/54/8ca054aa6d322a54a8795da7ddcd8dda.jpg', 
  'https://i.pinimg.com/originals/3c/4f/fb/3c4ffbb99fda42f0cb0bd8a5a8407298.jpg', 
  'https://i.pinimg.com/originals/87/02/3a/87023a0bd29655fbd3a732d0829b7931.jpg', 
  'https://i.pinimg.com/originals/eb/0a/8f/eb0a8f346229e0b5c06240d5542002a7.jpg', 
  'https://i.pinimg.com/originals/a0/47/3b/a0473b2b43066182960a5f0ea0ba0e33.jpg', 
  'https://i.pinimg.com/originals/0f/73/38/0f733816dcf0ecb56c16a96eeb5cf719.jpg', 
  'https://i.pinimg.com/originals/7c/af/66/7caf669b59ec606b4057a3c6bb2d84ac.jpg', 
  'https://i.pinimg.com/originals/8c/36/e1/8c36e10e284e4e3c4c8b327f1cc44c46.jpg', 
  'https://i.pinimg.com/originals/8e/19/4c/8e194cc4131ec51fa96be7aca0844c81.jpg', 
  'https://i.pinimg.com/originals/4d/eb/23/4deb230a30e087096d1dff10bb198f60.jpg', 
  'https://i.pinimg.com/originals/78/07/11/7807118f301105b31ca8c27055715392.jpg', 
  'https://i.pinimg.com/originals/54/5f/1c/545f1cd4dde6798e6c2363ff2e3fccd5.jpg', 
  'https://i.pinimg.com/originals/54/5f/1c/545f1cd4dde6798e6c2363ff2e3fccd5.jpg', 
  'https://i.pinimg.com/originals/6a/4d/0e/6a4d0ed6783507bfb62eecddbf619706.png', 
  'https://i.pinimg.com/originals/19/b7/c3/19b7c3502f768f34de6b4651014934b3.png', 
  'https://i.pinimg.com/originals/97/2e/39/972e39d52b135d3e74e10519fbeaa73c.png', 
  'https://i.pinimg.com/originals/3b/5e/9c/3b5e9cc6ff1234d2f4cc8be8e77954ad.jpg', 
  'https://i.pinimg.com/originals/df/78/8f/df788f06d127773e8732608218ab2022.jpg', 
  'https://i.pinimg.com/originals/1a/64/15/1a64158dac5c029c3078fb71f1c776b0.jpg', 
  'https://i.pinimg.com/originals/b6/45/94/b645947e676ae56a98e97b2e6b7b2d4d.jpg', 
  'https://i.pinimg.com/originals/0c/e2/6e/0ce26e193cd3849449a16797f184f390.jpg', 
  'https://i.pinimg.com/originals/4f/b8/d8/4fb8d80e4e9339c84ae3f243b0f18742.jpg', 
  'https://i.pinimg.com/originals/37/60/bf/3760bf1542c964d409366badec48b805.png', 
  'https://i.pinimg.com/originals/d2/c3/87/d2c387d4f5e062297cb640240100c534.jpg', 
  'https://i.pinimg.com/originals/5d/98/be/5d98beffd23c2b335447e493c0c13825.jpg', 
  'https://i.pinimg.com/originals/b6/96/0b/b6960bc63980ce8188e27b0f8bba0ddc.jpg', 
  'https://i.pinimg.com/originals/b6/96/0b/b6960bc63980ce8188e27b0f8bba0ddc.jpg', 
  'https://i.pinimg.com/originals/e3/58/64/e358641e626e967665c64820c3d8c6a4.jpg', 
  'https://i.pinimg.com/originals/08/6c/56/086c56c7da7d2e8fe9f4f4d048292954.jpg', 
  'https://i.pinimg.com/originals/e5/19/50/e51950142fe27ba3bb91d5c0b9f2326d.jpg', 
  'https://i.pinimg.com/originals/c5/fe/59/c5fe5958bf2f913071832671f74c340b.jpg', 
  'https://i.pinimg.com/originals/63/b1/e7/63b1e78fed88ae762f86f734a0a96d61.jpg', 
  'https://i.pinimg.com/originals/c5/55/58/c555581e88b0316930ce2f277d34d3c6.jpg', 
  'https://i.pinimg.com/originals/6a/be/0f/6abe0f005dc403f74eda0a5a6e811f59.jpg', 
  'https://i.pinimg.com/originals/c5/fe/59/c5fe5958bf2f913071832671f74c340b.jpg', 
  'https://i.pinimg.com/originals/c5/55/58/c555581e88b0316930ce2f277d34d3c6.jpg', 
  'https://i.pinimg.com/originals/63/b1/e7/63b1e78fed88ae762f86f734a0a96d61.jpg', 
  'https://i.pinimg.com/originals/62/74/07/627407167beff8dd326b378cea5dc7cf.jpg', 
  'https://i.pinimg.com/originals/15/f1/63/15f16379e576615e08aa1270e34f4c90.png', 
  'https://i.pinimg.com/originals/13/7f/4c/137f4ca2cb0e8f17a006cc1e06f2d4a7.jpg', 
  'https://i.pinimg.com/originals/14/e8/fa/14e8fa35bf5b8c13f4f51e59c7ad2a1d.jpg', 
  'https://i.pinimg.com/originals/1c/ee/de/1ceede5ff32d841aa17c36dfd9730608.jpg', 
  'https://i.pinimg.com/originals/13/ef/1a/13ef1a7ccb54fafe13a4a2dcf480e16a.jpg', 
  'https://i.pinimg.com/originals/51/21/cf/5121cf985b6708056c929e75315178a5.jpg', 
  'https://i.pinimg.com/originals/eb/d8/e4/ebd8e4de88e9a60d2af41838790d4ffd.jpg', 
  'https://i.pinimg.com/originals/13/0f/19/130f19ba762da8b736ffeb1299eb68c5.jpg', 
  'https://i.pinimg.com/originals/5a/cb/25/5acb250edafef20e8aba8ea86ab6d2db.png', 
  'https://i.pinimg.com/originals/92/19/0a/92190a7cec1fc8ef3a99f70764a5af5c.jpg', 
  'https://i.pinimg.com/originals/f2/f9/4e/f2f94e4b677c9ee5a72321cfe5de1442.jpg', 
  'https://i.pinimg.com/originals/ab/1a/ef/ab1aef034e453c8981fc001de8ac0e5d.jpg', 
  'https://i.pinimg.com/originals/3d/a6/da/3da6da19e2e51df8be001a765aacec38.jpg', 
  'https://i.pinimg.com/originals/21/42/89/2142895296477d091daa2770ffd78964.jpg', 
  'https://i.pinimg.com/originals/b6/82/a3/b682a3231b41a52bca5733a804af022f.jpg', 
  'https://i.pinimg.com/originals/6a/be/0f/6abe0f005dc403f74eda0a5a6e811f59.jpg', 
  'https://i.pinimg.com/originals/38/91/9d/38919d5bfd3655460d8a2197fc45ec11.jpg', 
  'https://i.pinimg.com/originals/a6/8c/36/a68c3622200b71da6831f529e5f3ffc9.png', 
  'https://i.pinimg.com/originals/44/84/71/44847131db0e60f9afb63ee4fc6632dd.jpg', 
  'https://i.pinimg.com/originals/e8/65/95/e86595936f784c7507f3774e72d230f7.jpg', 
  'https://i.pinimg.com/originals/13/7f/4c/137f4ca2cb0e8f17a006cc1e06f2d4a7.jpg', 
  'https://i.pinimg.com/originals/ba/11/db/ba11dbe0ea145a298e41a897911c17c2.png', 
  'https://i.pinimg.com/originals/81/12/be/8112be1791b4e84694e59d88fe731052.png', 
  'https://i.pinimg.com/originals/21/42/89/2142895296477d091daa2770ffd78964.jpg', 
  'https://i.pinimg.com/originals/a0/f7/d7/a0f7d71f6356b8ca5a5f42af8066162e.jpg', 
  'https://i.pinimg.com/originals/85/41/19/8541197c47926478d729bf761579003e.jpg', 
  'https://i.pinimg.com/originals/b0/e9/88/b0e9880faf3bc702131ab3159ad906c5.jpg', 
  'https://i.pinimg.com/originals/00/d9/c8/00d9c873a6332355f864b1ea25ba9efa.jpg', 
  'https://i.pinimg.com/originals/00/d9/c8/00d9c873a6332355f864b1ea25ba9efa.jpg', 
  'https://i.pinimg.com/originals/07/93/ba/0793ba12842bab83b5b1a6e8476b7561.jpg', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '*انمي بنات 💜💫*', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['بنت', 'dados'] 
export default handler