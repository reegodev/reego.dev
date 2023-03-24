export const getImageUrl = (title: string, description: string, date: Date, readingTime: string): string => {

  const formattedDate = date.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).replace(',', '')

  const layers = [

    'w_1360,h_770,c_fill,q_auto,f_auto',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'ffffff'],
      ['l_text', `Quicksand_80_bold:${encodeURIComponent(title)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_north_west,y_210,x_120',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'd4d4d8'],
      ['l_text', `Quicksand_40:${encodeURIComponent(description)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_south_west,y_110,x_120',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', '95959e'],
      ['l_text', `Quicksand_40:${encodeURIComponent(formattedDate).replace(/%2F/g, '%252F')}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_north_west,y_110,x_120',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', '95959e'],
      ['l_text', `Quicksand_40:${encodeURIComponent(readingTime)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_north_east,y_110,x_120',

  ].join('/')


  return `https://res.cloudinary.com/reegodev/image/upload/${layers}/social_base_post_szfzhu.jpg`
}